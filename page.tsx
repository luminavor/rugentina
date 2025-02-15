import { Twitter, Send, BarChart2 } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0">
        <source src="/rugentina-2TRHsOB8h0M1TM71HGCv4eujSUdZIn.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 px-4">
          Take a trip to $RUGENTINA - a community-driven memecoin deployed on Yapster.
        </h1>
        <div className="flex space-x-6">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Twitter size={32} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Send size={32} />
            <span className="sr-only">Telegram</span>
          </Link>
          <Link
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <BarChart2 size={32} />
            <span className="sr-only">Dexscreener</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

