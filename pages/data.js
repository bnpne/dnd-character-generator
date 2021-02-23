import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Formik, Field, Form } from 'formik'
import { useCollection } from '@nandorojo/swr-firestore'
import {countData, countFive} from '../lib/countData'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory'

const Data = () => {
  const [auth, setAuth] = useState(false)

  const { data , error} = useCollection('answers', {
  })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // Used for question one Chart
  var questionOneData = countData(data)
  var questionFiveData = countFive(data)
  // console.log(questionOneData)
  
  return (
    <div>
      <Layout title="Data">
        <div className="max-w-3xl mx-auto mb-40 overflow-visible">
          {auth ? (
            <div>
              <h1 className="font-extrabold text-xl">
                Please enter password to see the data
              </h1>
              <p className="pb-4">Hint: its '1234' :)</p>
              <Formik
                initialValues={{
                  password: '',
                }}
                onSubmit={async (values) => {
                  if (values.password == '1234') {
                    setAuth(true)
                  } else {
                    alert('Password incorrect, try again')
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field
                      className="text-xl focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border-gray-300 rounded-md"
                      name="password"
                      placeholder="Password"
                    />

                    <button
                      className="mt-10 text-xl font-extrabold px-4 py-2 bg-indigo-200 text-indigo-500 rounded-md"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <div>
              <h1>This data records the answers for question one.</h1>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryLine
                  domain={{ x: [1, 2], y: [0, 10] }}
                  categories={{ x: ['no', 'maybe', 'yes'] }}
                  style={{
                    data: { stroke: '#c43a31' },
                    parent: { border: '1px solid #ccc' },
                  }}
                  data={[
                    { x: 1, y: questionOneData.no },
                    { x: 2, y: questionOneData.maybe },
                    { x: 3, y: questionOneData.yes },
                  ]}
                />
              </VictoryChart>
              <h1 className="pt-10 pb-2">
                This shows different answers for question five.
              </h1>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryLine
                  domain={{ x: [1, 2], y: [0, 10] }}
                  categories={{ x: ['small', 'medium', 'large'] }}
                  style={{
                    data: { stroke: '#000' },
                    parent: { border: '1px solid #ccc' },
                  }}
                  data={[
                    { x: 1, y: questionFiveData.small },
                    { x: 2, y: questionFiveData.medium },
                    { x: 3, y: questionFiveData.large },
                  ]}
                />
              </VictoryChart>
              <h1 className="pt-10 pb-2">
                This shows different answers for question six.
              </h1>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryLine
                  domain={{ x: [1, 2], y: [0, 10] }}
                  categories={{ x: ['good', 'neutral', 'evil'] }}
                  style={{
                    data: { stroke: '#000' },
                    parent: { border: '1px solid #ccc' },
                  }}
                  data={[
                    { x: 1, y: questionFiveData.small },
                    { x: 2, y: questionFiveData.medium },
                    { x: 3, y: questionFiveData.large },
                  ]}
                />
              </VictoryChart>
            </div>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Data
