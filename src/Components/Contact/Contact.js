import { Container, Button, Stack, TextField, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Heading, Title } from "Components/Cleaning/Cleaning.styles";
import { ContactHero } from "./Contact.styles";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ValidationSchema } from "./ValidationSchema";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useTheme } from '@mui/styles';

export const Contact = () => {

    const theme = useTheme();

    const initialValues = {

        name: '',
        email: '',
        phone: '',
        message: '',

    }
    const onSubmit = async (values, props) => {
        console.log(values);
    }
    return (
        <Box style={{ backgroundColor: '#f7f7f7' }}>

            <ContactHero>
                <Heading variant="h2">
                    Contact us
                </Heading>
            </ContactHero>

            <Container maxWidth='lg'>

                <Stack spacing={4} direction='row' padding='2em 0' justifyContent='space-around' sx={{ width: '100%' }}>

                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        onSubmit={onSubmit}
                        validationSchema={ValidationSchema}

                    >
                        {(props) => (
                            <Form style={{ width: '100%' }}
                            >
                                <Stack spacing={2} sx={{ p: 2 }} >

                                    <Field as={TextField} label='Name' name="name"
                                        placeholder='Full name' fullWidth
                                        helperText={<ErrorMessage name="name" />}
                                    />
                                    <Field as={TextField} label='Email' name="email"
                                        placeholder='Email address' fullWidth
                                        helperText={<ErrorMessage name="email" />}


                                    />
                                    <Field as={TextField} label='Phone' name="phone"
                                        placeholder='Phone number' fullWidth
                                        helperText={<ErrorMessage name="phone" />}
                                    />


                                    <Field as={TextField} label='Message' name="message"
                                        placeholder='Message' fullWidth
                                        multiline
                                        rows={5}
                                        maxRows={10}
                                        helperText={<ErrorMessage name="message" />}
                                    />


                                    <Button type='submit' color='primary' variant="contained"
                                    >{props.isSubmitting ? "Loading" : "Send"}</Button>
                                </Stack>
                            </Form>
                        )}

                    </Formik>
                    <Stack spacing={4} justifyContent='center'>
                        <Title style={{fontSize: '1.5rem'}}>
                            Vi hjælper dig med rengøring
                        </Title>
                        <Stack direction='row' spacing={4} alignItems='center'>
                            <PhoneIcon color="primary" sx={{ fontSize: '3em' }} />
                            <IconButton href="tel:76778899">
                                <Typography color='primary' variant="body1" sx={{ fontSize: '1em' }}>
                                    76 77 88 99
                                </Typography>
                            </IconButton>
                        </Stack>
                        <Stack direction='row' spacing={4} alignItems='center'>
                            <EmailIcon color="primary" sx={{ fontSize: '3em' }} />
                            <IconButton href="mailto:test@example.com">
                                <Typography color='primary' variant="body1" sx={{ fontSize: '1em' }}>
                                    contact@azqualityservice.com
                                </Typography>
                            </IconButton>
                        </Stack>
                        <Stack direction='row' spacing={4} alignItems='center'>
                            <LocationOnIcon color="primary" sx={{ fontSize: '3em' }} />
                            <IconButton href="mailto:test@example.com">
                                <Typography color='primary' variant="body1" sx={{ fontSize: '1em' }}>
                                    Tingbjer ås 9 3tv, 2700 Brønshøj
                                </Typography>
                            </IconButton>
                        </Stack>
                        <Typography variant="body1" style={{color: theme.palette.secondary.main}}>
                            Vi tager imod rengøringsopgaver både akutte og planlagte. Ring eller skriv og få et uforpligtende tilbud!
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}