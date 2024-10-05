"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.action"
import { FormFieldType } from "./PatientForm"
import { RadioGroup, RadioGroupItem } from "../radio-group"
import { Doctors, GenderOptions } from "@/constants"
import { Label } from "../label"
import { SelectItem } from "@radix-ui/react-select"
import Image from "next/image"


const RegisterForm = ({ user }: { user: User }) => {
    const router = useRouter()


    const [isLoading, setIsLoading] = useState(false);


    // 1. Define your form.
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
        setIsLoading(true)
        try {

            const userData = {
                name,
                email,
                phone
            }
            const user = await createUser(userData);

            if (user) router.push(`/patients/${user.$id}/register`)

        } catch (error) {
            console.log(error);


        }
    }



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">


                {/* section - 1 */}
                <section className="space-y-4">
                    <h1 className="header" > Welcome </h1>
                    <p className="text-dark-700" >Lets us know about yourself</p>
                </section>


                {/*//* section - 2 */}

                <section className="space-y-6">
                    <div className="mb-9 space-y-1" >
                        <h2 className="sub-header" >Personal Information</h2>
                    </div>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"

                />

                <div className="flex flex-col gap-6 xl:flex-row ">
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="email"
                        label="E-mail"
                        placeholder="xxxx123@gmail.com"
                        iconSrc="/assets/icons/email.svg"
                        iconAlt="email"

                    />
                    <CustomFormField
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name="phone"
                        label="Phone no."
                        placeholder="999 (888) 7776"
                        iconAlt="phone"

                    />

                </div>

                <div className="flex flex-col gap-6 xl:flex-row ">
                    <CustomFormField
                        fieldType={FormFieldType.DATE_PICKER}
                        control={form.control}
                        name="birthDate"
                        label="Date of birth"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        name="Gender"
                        label="Gender"
                        renderSkeleton={(field) => (
                            <FormControl>
                                <RadioGroup className="flex h-11 xl:justify-between gap-6"
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    {GenderOptions.map((option) => (
                                        <div key={option} className="radio-group" >
                                            <RadioGroupItem value={option} id={option} />
                                            <Label htmlFor={option} className="cursor-pointer" >{option}</Label>
                                        </div>
                                    ))}

                                </RadioGroup>

                            </FormControl>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-6 xl:flex-row ">
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="address"
                        label="address"
                        placeholder="123 Main Street"

                    />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="occupation"
                        label="Occupation"
                        placeholder="Software Engineer"
                    />
                </div>
                <div className="flex flex-col gap-6 xl:flex-row ">
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="emergencyContactName"
                        label="Emergency Contact Name"
                        placeholder="Guardian Name"
                        iconAlt="Name"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name="emergencyContact"
                        label="Emergency Contact"
                        placeholder="999-888-7776"
                        iconAlt="phone"
                    />
                </div>

                {/*//* section - 3 */}

                <section className="space-y-6">
                    <div className="mb-9 space-y-1" >
                        <h2 className="sub-header" >Medical Information</h2>
                    </div>
                </section>
                <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="primaryPhysician"
                    label="Primary Physician"
                    placeholder="Select a physician"

                >

                    {Doctors.map((doctor) => (
                        <SelectItem key={doctor.name} value={doctor.name} >
                            <div className="flex items-center cursor-pointer m-2 gap-3" >
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full border-dark-500 border"
                                />
                                <p>{doctor.name}</p>
                                <span  className="text-dark-600 text-sm">
                                    {doctor.speciality}
                                </span>
                            </div>
                        </SelectItem>
                    ))}
                </CustomFormField>
                <div className="flex flex-col gap-6 xl:flex-row ">

                </div>

                <SubmitButton isLoading={isLoading}>
                    Get started
                </SubmitButton>
            </form>
        </Form>
    )
}

export default RegisterForm