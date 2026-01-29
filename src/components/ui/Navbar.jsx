import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Determine scroll direction and visibility
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false) // Hide on scroll down
            } else {
                setIsVisible(true)  // Show on scroll up
            }

            setLastScrollY(currentScrollY)
            setScrolled(currentScrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const navItems = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
    ]

    const shouldShowBackground = scrolled || isOpen

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: (isVisible || isOpen) ? 0 : -100 }}
            className={`fixed top-4 left-4 right-4 z-40 rounded-2xl transition-all duration-300 ${shouldShowBackground
                ? 'bg-gradient-to-r from-space/80 to-deep-space/80 backdrop-blur-xl border border-white/10 shadow-2xl'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-cyan-400 flex items-center justify-center">
                                <Terminal className="text-space" size={24} />
                            </div>
                            <div className="absolute -inset-1 bg-electric/20 blur-lg rounded-xl" />
                        </div>
                        <div className="hidden md:block">
                            <div className="font-mono font-bold">Venkata Mastan Mudigonda</div>
                            <div className="text-xs text-gray-400">Data Alchemist</div>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="px-4 py-2 rounded-lg hover:bg-white/5 transition-colors relative group"
                            >
                                <span className="text-gray-300 group-hover:text-white transition-colors">
                                    {item.label}
                                </span>
                                <motion.div
                                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-electric rounded-full"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                />
                            </motion.a>
                        ))}
                        <motion.a
                            href="mailto:venkatamastan.mudigonda@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-4 px-6 py-2 rounded-full bg-electric text-space font-semibold hover:bg-electric/90 transition-colors"
                        >
                            Hire Me
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/10"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden mt-4"
                        >
                            <div className="space-y-2 py-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <a
                                    href="mailto:venkatamastan.mudigonda@gmail.com"
                                    className="block px-4 py-3 rounded-lg bg-electric text-space font-semibold text-center"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navbar