import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
const userSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  roll: Yup.number()
    .min(7, 'Minimum length should be 7')
    .max(8, 'Maximum length should be 8')
    .required('Roll is required'),
  section: Yup.string().min(4, 'min length 4').max(7, 'max length 7'),
  year: Yup.number().min(1).max(1).required(),
  branch: Yup.string(),
  university: Yup.string(),
  hostel: Yup.string(),
  subject: Yup.string(),
  email: Yup.string().email().required('Please enter your valid email'),
  password: Yup.string().min(6).required('Please enter your password'),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Password must match'),
});

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.card, styles.elevatedCard]}>
            <View style={styles.heading}>
              <Text style={styles.headingTxt}>Form</Text>
            </View>

            <Formik
              initialValues={{
                name: '',
                roll: '',
                section: '',
                year: '',
                branch: '',
                university: '',
                hostel: '',
                sub: '',
                email: '',
                password: '',
                confirm_password: '',
              }}
              validationSchema={userSchema}
              onSubmit={values => {
                console.log(values);
              }}>
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                  <View style={styles.formItems}>
                    <ScrollView>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>Name</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.name}
                          onChangeText={handleChange('name')}
                          placeholder="Rahul Bose"
                          keyboardType="default"
                        />
                        {touched.name && errors.name && (
                          <Text style={styles.errorText}>{errors.name}</Text>
                        )}
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>Roll</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.roll}
                          onChangeText={handleChange('roll')}
                          placeholder="2105XXXX"
                          keyboardType="numeric"
                        />
                        {touched.roll && errors.roll && (
                          <Text style={styles.errorText}>{errors.roll}</Text>
                        )}
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>Section</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.section}
                          onChangeText={handleChange('section')}
                          placeholder="CSE-32"
                          keyboardType="default"
                        />
                        {touched.section && errors.section && (
                          <Text style={styles.errorText}>{errors.section}</Text>
                        )}
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>Year</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.year}
                          onChangeText={handleChange('year')}
                          placeholder="2nd"
                          keyboardType="default"
                        />
                        {touched.year && errors.year && (
                          <Text style={styles.errorText}>{errors.year}</Text>
                        )}
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>Branch</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.branch}
                          onChangeText={handleChange('branch')}
                          placeholder="CSE"
                          keyboardType="default"
                        />
                        {touched.branch && errors.branch && (
                          <Text style={styles.errorText}>{errors.branch}</Text>
                        )}
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>University</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.university}
                          onChangeText={handleChange('university')}
                          placeholder="KIIT"
                          keyboardType="default"
                        />
                        {touched.university && errors.section && (
                          <Text style={styles.errorText}>
                            {errors.university}
                          </Text>
                        )}
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>Hostel</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.hostel}
                          onChangeText={handleChange('hostel')}
                          placeholder="KP-5/QC-1"
                          keyboardType="default"
                        />
                        {touched.hostel && errors.hostel && (
                          <Text style={styles.errorText}>{errors.hostel}</Text>
                        )}
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>Email</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.email}
                          onChangeText={handleChange('email')}
                          placeholder="acc@def.ghi"
                          keyboardType="default"
                        />
                        {touched.email && errors.email && (
                          <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>Password</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.password}
                          onChangeText={handleChange('password')}
                          secureTextEntry={true}
                          keyboardType="default"
                        />
                        {touched.password && errors.password && (
                          <Text style={styles.errorText}>
                            {errors.password}
                          </Text>
                        )}
                      </View>
                      <View style={styles.item}>
                        <Text style={styles.itemTxt}>Confirm Password</Text>
                        <TextInput
                          style={styles.fillBox}
                          value={values.confirm_password}
                          onChangeText={handleChange('confirm_password')}
                          secureTextEntry={true}
                          keyboardType="default"
                        
                        />
                        {touched.confirm_password &&
                          errors.confirm_password && (
                            <Text style={styles.errorText}>
                              {errors.confirm_password}
                            </Text>
                          )}
                      </View>
                      <View style={styles.clickable}>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => {
                            handleReset();
                          }}>
                          <Text style={styles.buttonTxt}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={handleSubmit}>
                          <Text style={styles.buttonTxt}>Register</Text>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // paddingRight: 20,
    // paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5DA3FA',
    height: '100%',
    width: '100%',
  },
  card: {
    width: '90%',
    height: '90%',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginHorizontal: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  elevatedCard: {
    elevation: 50,
    shadowOffset: {
      height: 50,
      width: 50,
    },
    shadowColor: '#08084d',
    shadowOpacity: 80,
  },
  heading: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    // position: 'absolute',
    // marginLeft: 60,
  },
  headingTxt: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000000',
  },
  formItems: {
    flex: 15,
    width: '95%',
    height: 700,
    // alignItems: 'center',
    borderColor: '#000000',
    // borderWidth: 3,
    margin: 10,
    // marginTop: 70,
  },
  item: {
    width: '97%',
    borderColor: '#000000',
    // borderWidth: 3,
    margin: 5,
    padding: 5,
  },
  itemTxt: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '800',
  },
  clickable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    // marginLeft: 20,
    // marginBottom:15,
    margin: 10,
    backgroundColor: '#5DA3FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  fillBox: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 30,
    padding: 10,
    color: '#000',
    fontSize: 15,
    marginTop: 2,
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
});
