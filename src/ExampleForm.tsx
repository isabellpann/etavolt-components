"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  EtavoltForm,
  EtavoltField,
} from "@/components/ui/form/etavolt-form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  question: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
  
})

export function ExampleForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        question: "",
        
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }
  
  return (
    <Form {...form}>
      <EtavoltForm onSubmit={form.handleSubmit(onSubmit)} >
        <EtavoltField 
        control={form.control} 
        label="name" 
        placeholder="name" 
        />
        <EtavoltField 
        control={form.control} 
        label="question" 
        placeholder="question" 
        />

        
      </EtavoltForm>
      
    </Form>
  )
}
