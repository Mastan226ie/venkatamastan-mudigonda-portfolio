import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Send, Copy, Check } from 'lucide-react'

const TerminalUI = () => {
  const [command, setCommand] = useState('')
  const [output, setOutput] = useState([])
  const [copied, setCopied] = useState(false)
  const scrollContainerRef = useRef(null)

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [output])

  const handleCommand = (cmd) => {
    switch (cmd.toLowerCase()) {
      case 'help':
        return [
          'Available commands:',
          '  about    - About me',
          '  skills   - View skills',
          '  projects - My projects',
          '  contact  - Contact info',
          '  clear    - Clear terminal',
          '  help     - Show this help'
        ]
      case 'about':
        return [
          'Venkata Mastan Mudigonda',
          'Data Science & Backend Developer',
          'Python | Flask | FastAPI | ML',
          'Passionate about data-driven applications'
        ]
      case 'skills':
        return [
          'Core Competencies:',
          '  Frontend: React',
          '  Backend: Python, Flask, FastAPI, Node.js',
          '  Data Science: ML, Data Viz, Pandas, Numpy',
          '  Tools: Git, Docker, Terminal Magic'
        ]
      case 'projects':
        return [
          'Recent Projects:',
          '  1. Trajecta - Trajectory analysis & visualization',
          '  2. BlogPost Application - Interactive blog platform using python',
          '  3. Mapras Weather - Real-time react weather app',
          '  4. Mapras Edu Web App - Basic Education platform ecosystem using React '
        ]
      case 'contact':
        return [
          'Email: venkatamastan.mudigonda@gmail.com',
          'Phone: +91 9966854181',
          'GitHub: github.com/Mastan226ie',
          'LinkedIn: linkedin.com/in/venkatamastan-mudigonda1326'
        ]
      case 'clear':
        setOutput([])
        return []
      default:
        return [`Command not found: ${cmd}. Type 'help' for available commands.`]
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!command.trim()) return

    const newOutput = handleCommand(command)
    if (command.toLowerCase() !== 'clear') {
      setOutput(prev => [...prev, `$ ${command}`, ...newOutput])
    }
    setCommand('')
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('venkatamastan.mudigonda@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-black/30 rounded-xl border border-electric/20 p-4 font-mono">
      <div className="flex items-center gap-2 mb-4">
        <Terminal className="text-electric" size={20} />
        <span className="text-electric">terminal.exe</span>
        <div className="flex-1" />
        <motion.button
          onClick={copyEmail}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1 px-3 py-1 rounded bg-electric/10 text-electric text-sm"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy Email'}
        </motion.button>
      </div>

      <div ref={scrollContainerRef} className="h-48 overflow-y-auto mb-4 space-y-1 text-sm scroll-smooth">
        <div className="text-green-400">Welcome to Mastan's Terminal</div>
        <div className="text-gray-400">Type 'help' to get started</div>
        {output.map((line, index) => (
          <div key={index} className={line.startsWith('$') ? 'text-electric' : 'text-gray-300'}>
            {line}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-electric">$</span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-300 px-2 py-1"
          placeholder="Type a command..."
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded bg-electric/10 hover:bg-electric/20"
        >
          <Send size={16} />
        </motion.button>
      </form>
    </div>
  )
}

export default TerminalUI