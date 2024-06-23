'use client'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

export function StepOne() {
  const { control } = useFormContext()
  return (
    <>
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center justify-between">
              Employee ID
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input placeholder="e.g S123456789" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center justify-between">
              Email Address
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input placeholder="e.g guy_fieri@dsg.com" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center justify-between">
              Phone Number
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input placeholder="e.g +1 234 567 890" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  )
}
