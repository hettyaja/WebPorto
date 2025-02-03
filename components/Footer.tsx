export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-xl font-bold">
          Let’s Connect! ✨ <a href="mailto:hettyverg@gmail.com" className="underline hover:text-gray-400">hettyverg@gmail.com</a>
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-gray-400">LinkedIn</a>
        </div>
        <p className="text-sm text-gray-500 mt-4">© 2025 Hetty. All rights reserved.</p>
      </footer>
    );
  }
  