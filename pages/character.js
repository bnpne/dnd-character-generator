import React, { useState } from 'react'
import Layout from '../components/Layout'
import {useRouter} from 'next/router'
import { useAtom } from 'jotai'
import {
  raceAtom,
  classAtom,
} from '../lib/inputAtom'
import { classList, raceList } from '../lib/lists'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Character = () => {
  const [raceInput, setRaceInput] = useAtom(raceAtom)
  const [classInput, setClassInput] = useAtom(classAtom)
  const [charClass, setCharClass] = useState('')
  const [charRace, setCharRace] = useState('')
  var sRace = ''
  var sClass = ''
  var tRace = ''
  var tClass = ''
  const router = useRouter()

  // var URL = `https://www.dnd5eapi.co/api/classes/${classInput}`
  var URL = `https://www.dnd5eapi.co/api/classes/${charClass}`

  const { data, error } = useSWR(URL, fetcher)
  // console.log(data)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data)

  sRace = raceList[Math.floor(Math.random() * raceList.length)]
  sClass = classList[Math.floor(Math.random() * classList.length)]
  tRace = raceList[Math.floor(Math.random() * raceList.length)]
  tClass = classList[Math.floor(Math.random() * classList.length)]

  var uRace = raceInput.charAt(0).toUpperCase() + raceInput.slice(1)
  var uClass = classInput.charAt(0).toUpperCase() + classInput.slice(1)
  var suRace = sRace.charAt(0).toUpperCase() + sRace.slice(1)
  var suClass = sClass.charAt(0).toUpperCase() + sClass.slice(1)
  var tuRace = tRace.charAt(0).toUpperCase() + tRace.slice(1)
  var tuClass = tClass.charAt(0).toUpperCase() + tClass.slice(1)

  return (
    <div>
      <Layout title="My Character">
        <div className="max-w-4xl mx-auto mb-32">
          {!charClass ? (
            <div>
              <h1 className="text-2xl font-extrabold ">Your Character</h1>
              <p className="text-lg pb-10">
                Here are a couple options we think you'll enjoy. Choose one!
              </p>
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => {
                      setCharClass(uClass.toLowerCase())
                      setCharRace(uRace.toLowerCase())
                    }}
                    className="shadow-md p-6 rounded-md"
                  >
                    <a className="font-extrabold text-xl">
                      {uRace} {uClass}
                    </a>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setCharClass(suClass.toLowerCase())
                      setCharRace(suRace.toLowerCase())
                    }}
                    className="shadow-md p-6 rounded-md"
                  >
                    <a className="font-extrabold text-xl">
                      {suRace} {suClass}
                    </a>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setCharClass(tuClass.toLowerCase())
                      setCharRace(tuRace.toLowerCase())
                    }}
                    className="shadow-md p-6 rounded-md"
                  >
                    <a className="font-extrabold text-xl">
                      {tuRace} {tuClass}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-extrabold pb-10">
                {charRace.toUpperCase()} {charClass.toUpperCase()}
              </h1>
              <div className="font-mono space-y-2">
                <h2>
                  <span className="font-bold underline">Hit Die:</span>{' '}
                  {data.hit_die}
                </h2>
                <h2 className="font-bold underline">Saving Throws:</h2>
                <ul className='list-inside list-decimal'>
                  {data.saving_throws.map((name) => {
                    return <li>{name.name}</li>
                  })}
                </ul>
                <h2 className="font-bold underline">Proficiencies:</h2>
                <ul className='list-inside list-decimal'>
                  {data.proficiencies.map((name) => {
                    return <li>{name.name}</li>
                  })}
                </ul>
                <h2 className="font-bold underline">Proficiency Choices:</h2>
                <ul className='list-inside list-decimal'>
                  {data.proficiency_choices.map((name) => {
                    return (
                      <div>
                        <p className="pb-2 font-bold">
                          Choose {name.choose} from:
                        </p>
                        <ul className="pb-4">
                          {name.from.map((from) => {
                            return <li>{from.name}</li>
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </ul>
                <h2 className="font-bold underline">Starting Equipment:</h2>
                <ul className='list-inside list-decimal'>
                  {data.starting_equipment.map((name) => {
                    return <li>{name.equipment.name} x{name.quantity}</li>
                  })}
                </ul>
                {data.spellcasting && (
                  <div>
                    <h2 className="font-bold underline pb-4">Spellcasting:</h2>
                    <ul className='list-inside'>
                      {data.spellcasting.info.map((name) => {
                        return (
                          <li>
                            <p className='pb-2 font-bold'>{name.name}</p>
                            <p className='pb-4'>{name.desc} </p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          <div>
            <button
              className="mt-10 text-xl font-extrabold px-4 py-2 bg-indigo-200 text-indigo-500 rounded-md"
              onClick={() => {
                router.push('/generator')
              }}
            >
              Start Over
            </button>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Character