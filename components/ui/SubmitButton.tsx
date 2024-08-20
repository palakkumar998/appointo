import React from 'react'

import Image from 'next/image'
import { Button } from './button'

interface ButtonProps {
    isLoading: boolean,
    clasName?: string,
    children: React.ReactNode

}

const SubmitButton = ({ isLoading, clasName, children }: ButtonProps) => {
    return (
        <Button type='submit' disabled={isLoading} className={clasName ?? "shad-primary-btn w-full"}>

            {isLoading ? (
                <div className='flex items-center gap-4'  >
                    <Image
                        src="/assets/icons/loader.svg"
                        width={24}
                        height={24}
                        alt='loading'
                        className='animate-spin'
                    />
                    Loading.....
                </div>

            ) : (

                children
            )}
        </Button>

    )
}

export default SubmitButton