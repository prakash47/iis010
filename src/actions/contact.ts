"use server";

import { z } from "zod";
import { ContactSchema, ContactFormState } from "@/lib/schemas";
import { after } from "next/server";

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const validatedFields = ContactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // Next.js 16 after() API for non-blocking side effects
    after(async () => {
        // Simulate email dispatch delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(`[Email Sent] To: details@vedicbrew.com | From: ${validatedFields.data.email}`);
    });

    return {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
    };
}
