"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail, Instagram, Copy, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  const email = "iopawnshop@gmail.com"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      toast({
        title: "Email copied!",
        description: "Email address copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy email to clipboard",
        variant: "destructive",
      })
    }
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  }

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/iopawn/", "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold text-silver-900">
              Contact IOPAWN
            </DialogTitle>
          </DialogHeader>
          
          <motion.div 
            className="space-y-6 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {/* Email Section */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
            <div className="flex items-center space-x-2 text-silver-700">
              <Mail className="h-5 w-5" />
              <span className="font-medium">Email us directly:</span>
            </div>
            
            <div className="flex items-center space-x-2 p-3 bg-silver-50 rounded-lg border">
              <span className="flex-1 text-silver-900 font-mono text-sm">{email}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyEmail}
                className="h-8 w-8 p-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            
            <Button 
              onClick={handleEmailClick}
              className="w-full"
              variant="outline"
            >
              <Mail className="h-4 w-4 mr-2" />
              Open Email Client
            </Button>
            </motion.div>

            {/* Divider */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-silver-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-silver-500">or</span>
            </div>
            </motion.div>

            {/* Instagram Section */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
            <div className="flex items-center space-x-2 text-silver-700">
              <Instagram className="h-5 w-5" />
              <span className="font-medium">Message us on Instagram:</span>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <p className="text-sm text-silver-700 mb-3">
                For quick responses and private messages, reach out to us on Instagram. 
                We're active daily and love hearing from our customers!
              </p>
              
              <Button 
                onClick={handleInstagramClick}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Open Instagram
              </Button>
            </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              className="text-center text-xs text-silver-500 pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <p>We typically respond within 24 hours</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
