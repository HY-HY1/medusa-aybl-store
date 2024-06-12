"use client"

import { Button } from "@/components/ui/button"
import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton({
  children,
  variant = "primary",
  className,
  'data-testid': dataTestId
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "transparent" | "danger" | null
  className?: string
  'data-testid'?: string
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      className={className}
      type="submit"
      variant="default"
      data-testid={dataTestId}
    >
      {children}
    </Button>
  )
}
