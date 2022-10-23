import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import logoDcrowD from '@/images/logos/dcrowd.svg'

import { ethers } from 'ethers'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const products = [{"__typename":"ActiveProject","projectId":"0","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669082001","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"1","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669082080","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"10","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669088897","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"11","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669098560","funded":false,"goal":"100000000000000000","balance":"20000000000000000","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"2","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669085692","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"3","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669088692","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"4","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669088767","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"5","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669088793","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"6","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669088812","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"7","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669088826","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"8","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669088869","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"},{"__typename":"ActiveProject","projectId":"9","creator":"0x2d949c8bc0d866783c0a8629208cb9dd2a5d2302","expires":"1669088881","funded":false,"goal":"10100000000000000000","balance":"0","uri":"https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn"}]

  
  
  export default function Projects() {
    
    return (
      <>
      <Header />
      <main>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Active</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.projectId} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.uri}
                   
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className = "object-center" style={{ ["marginLeft"]:"1.5em"}}>
                      <p> Goal : <span>  {product.goal} </span></p>
                      <p> Balance : <span>  {product.balance} </span></p>
                      <p> Expiry : <span>  {new Date(product.expires).toLocaleDateString("en-US")} </span></p>
                      <p> Creator : <span style={{ ["overflow"]:"scroll"}}>  {product.creator} </span></p>
       
                  </div>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </main>
      </>
    )
  }