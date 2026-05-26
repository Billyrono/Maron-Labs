"use server"

import { revalidatePath } from "next/cache"
import crypto from "crypto"

export interface AffiliateResponse {
  success: boolean;
  message: string;
  affiliateCode?: string;
}

export async function registerAffiliate(formData: FormData): Promise<AffiliateResponse> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  
  if (!name || !email || !phone) {
    return {
      success: false,
      message: "Please fill in all required fields."
    }
  }

  try {
    // Generate a unique 6-character alphanumeric affiliate code
    const uniqueHash = crypto.randomBytes(3).toString("hex").toUpperCase()
    const affiliateCode = `ML-${uniqueHash}`

    // In a real production scenario, you would save this to a database like Vercel Postgres,
    // Supabase, or Firebase here. For now, we simulate saving to our serverless backend.
    
    // Simulate database latency
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Optional: Log to server console to verify it works
    console.log(`New Affiliate Registered: ${name}, Code: ${affiliateCode}`)

    return {
      success: true,
      message: "Successfully registered! Welcome to the Maron Labs Affiliate Program.",
      affiliateCode
    }
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while registering. Please try again later."
    }
  }
}
