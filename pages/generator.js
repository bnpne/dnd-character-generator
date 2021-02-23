import { Form, Formik, Field } from 'formik'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useCollection } from '@nandorojo/swr-firestore'
import { processData } from '../lib/process'
import {useRouter} from 'next/router'
import { useAtom } from 'jotai'
import {
  raceAtom,
  classAtom,
} from '../lib/inputAtom'

const Generator = () => {
  const [raceInput, setRaceInput] = useAtom(raceAtom)
  const [classInput, setClassInput] = useAtom(classAtom)
  const [check, setCheck] = useState(false)
 
  const router = useRouter()

  const { add } = useCollection('answers')
  
  return (
    <div>
      <Layout title="D&D Character Generator">
        <div>
          <h1 className="text-center text-2xl font-extrabold pt-8 pb-12">
            Begin by answering a couple questions.
          </h1>
          <div className="max-w-3xl mx-auto mb-32">
            <Formik
              initialValues={{
                q1: '',
                q2: '',
                q3: '',
                q4: '',
                q5: '',
                q6: '',
                q7: '',
              }}
              // this will change once the questions are in
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000))

                if (values.q1 == '' || values.q2 == '' || values.q3 == '' || values.q4 == '' || values.q5 == '' || values.q6 == '' || values.q7 == '') {
                  alert('Please answer all of the questions')
                }
                else {
                  add({
                    question_1: values.q1,
                    question_2: values.q2,
                    question_3: values.q3,
                    question_4: values.q4,
                    question_5: values.q5,
                    question_6: values.q6,
                    question_7: values.q7,
                  })
                  
                  const chaData = processData(
                    values.q1,
                    values.q2,
                    values.q3,
                    values.q4,
                    values.q5,
                    values.q6,
                    values.q7
                  )
  
                  setRaceInput(chaData.userRace)
                  setClassInput(chaData.userClass)
  
                  // console.log(raceInput, classInput)
                  // console.log(chaData.userClass)
                  // console.log(raceInput, classInput)
                  // console.log(secRace, secClass)
                  router.push('/character')
                }

              }}
            >
              {({ values }) => (
                <Form>
                  <div className="space-y-4">
                    {/* 1 */}
                    <div className="shadow-md p-6 rounded-md">
                      <div className="font-extrabold pb-2 text-xl" id="q1">
                        Do you want to be a Spellcaster?
                      </div>
                      <div
                        className="space-x-4 "
                        role="group"
                        aria-labelledby="q1"
                      >
                        <label>
                          <Field type="radio" name="q1" value="yes" />
                          Yes
                        </label>
                        <label>
                          <Field type="radio" name="q1" value="maybe" />
                          Maybe
                        </label>
                        <label>
                          <Field type="radio" name="q1" value="no" />
                          No
                        </label>
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="shadow-md p-6 rounded-md">
                      <div className="font-extrabold pb-2 text-xl" id="q2">
                        Do you want to use a Weapon?
                      </div>
                      <div
                        className="space-x-4 "
                        role="group"
                        aria-labelledby="q2"
                      >
                        <label>
                          <Field type="radio" name="q2" value="yes" />
                          Yes
                        </label>
                        <label>
                          <Field type="radio" name="q2" value="no" />
                          No
                        </label>
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="shadow-md p-6 rounded-md">
                      <div className="font-extrabold pb-2 text-xl" id="q3">
                        Do you want to be Stealthy?
                      </div>
                      <div
                        className="space-x-4 "
                        role="group"
                        aria-labelledby="q3"
                      >
                        <label>
                          <Field type="radio" name="q3" value="yes" />
                          Yes
                        </label>
                        <label>
                          <Field type="radio" name="q3" value="no" />
                          No
                        </label>
                      </div>
                    </div>
                    {/* 4 */}
                    <div className="shadow-md p-6 rounded-md">
                      <div className="font-extrabold pb-2 text-xl" id="q4">
                        Do you want to be Religous or follow a Patron?
                      </div>
                      <div
                        className="space-x-4 "
                        role="group"
                        aria-labelledby="q4"
                      >
                        <label>
                          <Field type="radio" name="q4" value="yes" />
                          Yes
                        </label>
                        <label>
                          <Field type="radio" name="q4" value="no" />
                          No
                        </label>
                      </div>
                    </div>
                    {/* 5 */}
                    <div className="shadow-md p-6 rounded-md">
                      <div className="font-extrabold pb-2 text-xl" id="q5">
                        Do you want to play a big, medium, or small character?
                      </div>
                      <div
                        className="space-x-4 "
                        role="group"
                        aria-labelledby="q5"
                      >
                        <label>
                          <Field type="radio" name="q5" value="big" />
                          Big
                        </label>
                        <label>
                          <Field type="radio" name="q5" value="medium" />
                          Medium
                        </label>
                        <label>
                          <Field type="radio" name="q5" value="large" />
                          Small
                        </label>
                      </div>
                    </div>
                    {/* 6 */}
                    <div className="shadow-md p-6 rounded-md">
                      <div className="font-extrabold pb-2 text-xl" id="q6">
                        Do you want to play a good, neutral, or evil
                        character?
                      </div>
                      <div
                        className="space-x-4 "
                        role="group"
                        aria-labelledby="q6"
                      >
                        <label>
                          <Field type="radio" name="q6" value="good" />
                          Good
                        </label>
                        <label>
                          <Field type="radio" name="q6" value="neutral" />
                          Neutral
                        </label>
                        <label>
                          <Field type="radio" name="q6" value="evil" />
                          Evil
                        </label>
                      </div>
                    </div>
                    {/* 7 */}
                    <div className="shadow-md p-6 rounded-md">
                      <div className="font-extrabold pb-2 text-xl" id="q7">
                        Do you want to win battles by being strong or being
                        cunning?
                      </div>
                      <div
                        className="space-x-4 "
                        role="group"
                        aria-labelledby="q7"
                      >
                        <label>
                          <Field type="radio" name="q7" value="strong" />
                          Strong
                        </label>
                        <label>
                          <Field type="radio" name="q7" value="cunning" />
                          Cunning
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <h2 className="font-extrabold text-2xl pt-12 pb-4">
                    Are you ready? Click submit to generate your character!
                  </h2> */}
                  
                  <button
                    className="mt-10 text-xl font-extrabold px-4 py-2 bg-indigo-200 text-indigo-500 rounded-md"
                    type="submit"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Generator

