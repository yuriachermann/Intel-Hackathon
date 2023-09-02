import React from "react";
import "aos/dist/aos.css";
import Layout from "../components/layout/Layout";
import {
  Formik,
  Form,
  Field,
} from "formik";

interface MyFormValues {
  firstName: string;
  spiceness: string;
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
    spiceness: "",
    restriction: "",
    mealTime: "",
    cuisinePreference: "",
    mood: "",
    allergies: "",
    priceRange: "",
    currentWeather: "",
  };

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
          {({ values }) => (
            <Form>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="rounded-lg"
                />
              </div>
              <div>
                <div id="my-radio-group">Spice Level</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="spiceness" value="Mild" />
                    Mild
                  </label>
                  <label>
                    <Field type="radio" name="spiceness" value="Medium" />
                    Medium
                  </label>
                  <label>
                    <Field type="radio" name="spiceness" value="Spicy" />
                    Spicy
                  </label>
                  <div>Picked: {values.spiceness}</div>
                </div>
              </div>
              <div>
                <div id="my-radio-group">Dietary Restrictions</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="restriction" value="Vegan" />
                    Vegan
                  </label>
                  <label>
                    <Field type="radio" name="restriction" value="Vegetarian" />
                    Vegetarian
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="restriction"
                      value="Gluten-Free"
                    />
                    Gluten-Free
                  </label>
                  <div>Picked: {values.restriction}</div>
                </div>
              </div>
              <div>
                <div id="my-radio-group">Meal Time</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="mealTime" value="Breakfast" />
                    Breakfast
                  </label>
                  <label>
                    <Field type="radio" name="mealTime" value="Lunch" />
                    Lunch
                  </label>
                  <label>
                    <Field type="radio" name="mealTime" value="Dinner" />
                    Dinner
                  </label>
                  <div>Picked: {values.mealTime}</div>
                </div>
              </div>
              <div>
                <div id="my-radio-group">Cuisine Preference</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field
                      type="radio"
                      name="cuisinePreference"
                      value="American"
                    />
                    American
                  </label>
                  <label>
                    <Field type="radio" name="cuisinePreference" value="Asian" />
                    Asian
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="cuisinePreference"
                      value="European"
                    />
                    European
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="cuisinePreference"
                      value="Latin American"
                    />
                    Latin American
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="cuisinePreference"
                      value="Middle Eastern"
                    />
                    Middle Eastern
                  </label>
                  <div>Picked: {values.cuisinePreference}</div>
                </div>
              </div>
              <div>
                <div id="my-radio-group">Mood</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="mood" value="Happy" />
                    Happy
                  </label>
                  <label>
                    <Field type="radio" name="mood" value="Sad" />
                    Sad
                  </label>
                  <label>
                    <Field type="radio" name="mood" value="Angry" />
                    Angry
                  </label>
                  <label>
                    <Field type="radio" name="mood" value="Stressed" />
                    Stressed
                  </label>
                  <div>Picked: {values.mood}</div>
                </div>
              </div>
              <div>
                <div id="my-radio-group">Allergies</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="allergies" value="None" />
                    None
                  </label>
                  <label>
                    <Field type="radio" name="allergies" value="Dairy" />
                    Dairy
                  </label>
                  <label>
                    <Field type="radio" name="allergies" value="Eggs" />
                    Eggs
                  </label>
                  <label>
                    <Field type="radio" name="allergies" value="Nuts" />
                    Nuts
                  </label>
                  <label>
                    <Field type="radio" name="allergies" value="Shellfish" />
                    Shellfish
                  </label>
                  <div>Picked: {values.allergies}</div>
                </div>
              </div>
              <div>
                <div id="my-radio-group">Price Range</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="priceRange" value="$" />
                    $
                  </label>
                  <label>
                    <Field type="radio" name="priceRange" value="$$" />
                    $$
                  </label>
                  <label>
                    <Field type="radio" name="priceRange" value="$$$" />
                    $$$
                  </label>
                  <label>
                    <Field type="radio" name="priceRange" value="$$$$" />
                    $$$$
                  </label>
                  <div>Picked: {values.priceRange}</div>
                </div>
              </div>
              <div>
                <div id="my-radio-group">Current Weather</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="currentWeather" value="Sunny" />
                    Sunny
                  </label>
                  <label>
                    <Field type="radio" name="currentWeather" value="Rainy" />
                    Rainy
                  </label>
                  <label>
                    <Field type="radio" name="currentWeather" value="Snowy" />
                    Snowy
                  </label>
                  <label>
                    <Field type="radio" name="currentWeather" value="Cloudy" />
                    Cloudy
                  </label>
                  <div>Picked: {values.currentWeather}</div>
                </div>
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </main>
    </Layout>
  );
}

export default Ordering;
