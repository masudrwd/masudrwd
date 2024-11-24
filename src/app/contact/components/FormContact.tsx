'use client';

import { GridItem, HStack, Textarea } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { Input } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import Btn from '@/app/Components/shared/Btn';
import { formSchema } from './FormSchema';
import emailjs from '@emailjs/browser';
import { Toaster, toaster } from '@/components/ui/toaster';

const FormContact = () => {
   const formik = useFormik({
      initialValues: {
         fullName: '',
         email: '',
         textArea: '',
      },
      validationSchema: formSchema,
      onSubmit: (values, { setSubmitting, resetForm }) => {
         setSubmitting(true);

         emailjs
            .send(
               process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
               process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
               values,
               {
                  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
               }
            )
            .then(
               () => {
                  toaster.create({
                     title: `Your email has been sent.`,
                     type: 'success',
                     duration: 3000,
                  });
                  resetForm();
               },
               () => {
                  toaster.create({
                     title: `Something went wrong.`,
                     type: 'error',
                     duration: 3000,
                  });
               }
            )
            .finally(() => {
               setSubmitting(false);
            });
      },
   });

   const isError = formik.touched && formik.errors;

   return (
      <>
         <GridItem
            colSpan={{ base: 12, md: 7 }}
            border={'1px solid #383838'}
            _light={{ border: '1px solid #e2e2e2' }}
            p={6}
            py={8}
            borderRadius={'4xl'}
            cursor={'pointer'}
         >
            <form onSubmit={formik.handleSubmit}>
               <HStack gap={5} flexDirection={{ base: 'column', sm: 'row' }}>
                  <Field
                     label="Full Name:"
                     invalid={isError.fullName ? true : false}
                     errorText={isError.fullName ? formik.errors.fullName : ''}
                  >
                     <Input
                        placeholder="your name"
                        size={'xl'}
                        {...formik.getFieldProps('fullName')}
                     />
                  </Field>
                  <Field
                     label="Email Address:"
                     invalid={isError.email ? true : false}
                     errorText={isError.email ? formik.errors.email : ''}
                  >
                     <Input
                        placeholder="youremail@mail.com"
                        size={'xl'}
                        {...formik.getFieldProps('email')}
                     />
                  </Field>
               </HStack>
               <Field
                  label="Email Address:"
                  invalid={isError.textArea ? true : false}
                  errorText={isError.textArea ? formik.errors.textArea : ''}
                  mt={5}
               >
                  <Textarea
                     placeholder="Say something..."
                     size={'xl'}
                     {...formik.getFieldProps('textArea')}
                  />
               </Field>
               <Btn
                  bg={'primary.400'}
                  borderRadius={'xl'}
                  _light={{ bg: 'primary.500' }}
                  _hover={{ bg: 'primary.600' }}
                  mt={5}
                  type="submit"
                  isDisabled={formik.isSubmitting}
               >
                  {formik.isSubmitting ? 'Sending...' : 'Send Me!'}
               </Btn>
            </form>
         </GridItem>
         <Toaster />
      </>
   );
};

export default FormContact;
