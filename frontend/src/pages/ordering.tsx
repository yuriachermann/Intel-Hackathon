import React from "react";
import "aos/dist/aos.css";
import Layout from "../components/layout/Layout";
import { Formik, Form, Field } from "formik";
import axios from 'axios';

interface MyFormValues {
  firstName: string;
  spiciness: string;
  restriction: string;
  mealTime: string;
  cuisinePreference: string;
  mood: string;
  allergies: string;
  priceRange: string;
  currentWeather: string;
}

function Ordering() {
  const initialValues: MyFormValues = {
    firstName: "",
    spiciness: "",
    restriction: "",
    mealTime: "",
    cuisinePreference: "",
    mood: "",
    allergies: "",
    priceRange: "",
    currentWeather: "",
  };

  const foodIputs = [
    {
      value: "mealTime",
      label: "Meal Time",
      options: ["Breakfast", "Lunch", "Dinner"],
    },
    {
      value: "cuisinePreference",
      label: "Cuisine Preference",
      options: [
        "American",
        "Asian",
        "European",
        "Latin American",
        "Middle Eastern",
      ],
    },
    {
      value: "spiciness",
      label: "Spice Level",
      options: ["Mild", "Medium", "Spicy"],
    },
    {
      value: "restriction",
      label: "Dietary Restrictions",
      options: ["None", "Vegan", "Vegetarian", "Gluten-Free"],
    },
    {
      value: "allergies",
      label: "Allergies",
      options: ["None", "Dairy", "Eggs", "Nuts", "Shellfish"],
    },
  ];

  async function getGPT3Response(prompt: string) {
    const apiKey = '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';

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    };

    const payload = {
      prompt,
      max_tokens: 100
    };

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', payload, config);
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error(error);
    }
  }

// Usage
  const prompt = "Tell me a joke.";
  getGPT3Response(prompt).then(response => console.log(response));

  return (
    <Layout>
      <main className="grow">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, actions) => {
            console.log({ values, actions });
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {() => (
            <Form className="md:mx-32">
              <div className="ml-12 flex justify-between">
                <label
                  htmlFor="firstName"
                  className="basis-1/2 block pr-4 font-bold text-gray-500"
                >
                  First Name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="Write your first name"
                  className="basis-1/2 mr-40 block w-40 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:w-96"
                />
              </div>
              {foodIputs.map((input) => (
                <div key={input.value}>
                  <div className="my-8 h-[1px] w-full bg-gray-300" />
                  <div className="ml-12 flex justify-between">
                    <div
                      id="my-radio-group"
                      className="block basis-1/2 pr-4 font-bold text-gray-500"
                    >
                      {input.label}
                    </div>
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className=" flex basis-1/2 flex-col"
                    >
                      {input.options.map((option) => (
                        <label
                          key={option}
                          className="pr-4 font-bold text-gray-500"
                        >
                          <Field
                            type="radio"
                            name={input.value}
                            value={option}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-20">
                <button
                  type="submit"
                  className="btn group w-full bg-gradient-to-t from-orange-800 to-orange-700 text-white shadow-lg hover:to-orange-500"
                >
                  Drone Logistics
                  <span className="ml-1 tracking-normal text-orange-200 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </Layout>
  );
}

export default Ordering;
