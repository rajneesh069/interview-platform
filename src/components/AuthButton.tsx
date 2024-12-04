'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import AuthModal from "./AuthModal"

export function AuthButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium rounded-full px-6"
      >
        Login / SignUp
      </Button>
      <AuthModal 
        open={isOpen} 
        onOpenChange={setIsOpen}
      />
    </>
  )
}

