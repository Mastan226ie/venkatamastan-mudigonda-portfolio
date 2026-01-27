import { Octokit } from '@octokit/rest'

// Initialize Octokit (public access - no token needed for public repos)
const octokit = new Octokit()

export const fetchGitHubStats = async (username = 'Mastan226ie') => {
  try {
    const { data: user } = await octokit.rest.users.getByUsername({ username })
    
    const { data: repos } = await octokit.rest.repos.listForUser({ 
      username,
      sort: 'updated',
      per_page: 100
    })

    // Calculate total stars and forks
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0)

    // Get languages from all repos
    const languages = new Set()
    for (const repo of repos.slice(0, 10)) {
      const { data: repoLanguages } = await octokit.rest.repos.listLanguages({
        owner: username,
        repo: repo.name
      })
      Object.keys(repoLanguages).forEach(lang => languages.add(lang))
    }

    return {
      publicRepos: user.public_repos,
      totalStars,
      totalForks,
      languages: Array.from(languages),
      avatarUrl: user.avatar_url,
      bio: user.bio,
      lastUpdated: new Date().toISOString().split('T')[0]
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    return {
      publicRepos: 8,
      totalStars: 27,
      totalForks: 8,
      languages: ['Python', 'JavaScript', 'HTML', 'CSS', 'Java'],
      avatarUrl: null,
      bio: 'Aspiring Data Science and Backend Developer',
      lastUpdated: new Date().toISOString().split('T')[0]
    }
  }
}

export const fetchRepoDetails = async (repoName, username = 'Mastan226ie') => {
  try {
    const { data: repo } = await octokit.rest.repos.get({
      owner: username,
      repo: repoName
    })

    const { data: languages } = await octokit.rest.repos.listLanguages({
      owner: username,
      repo: repoName
    })

    const { data: commits } = await octokit.rest.repos.listCommits({
      owner: username,
      repo: repoName,
      per_page: 1
    })

    return {
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: Object.keys(languages)[0] || 'Python',
      lastCommit: commits[0]?.commit?.author?.date || repo.updated_at,
      topics: repo.topics || [],
      htmlUrl: repo.html_url,
      homepage: repo.homepage
    }
  } catch (error) {
    console.error(`Error fetching repo ${repoName}:`, error)
    return null
  }
}

export const fetchContributionGraph = async (username = 'Mastan226ie') => {
  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
    const data = await response.json()
    return data.contributions
  } catch (error) {
    console.error('Error fetching contribution graph:', error)
    return []
  }
}