import React, { useState } from 'react';
import Button from '../../../buttons/Button';
import Input from '../../../inputs/basic/Input';
import Select from '../../../inputs/basic/Select';
import {
  BottomWrapper,
  DetailsWrapper,
  GrayWrapper,
  GridWrapper,
  HeadWrapper,
  PageWrapper,
} from '../../styles';
import ClientQuickForm from './ClientQuickForm';

const clientFullFormData = {
  names: [
    { title: 'First Name', description: 'Enter your first name' },
    { title: 'Middle Name', description: 'Enter your middle name' },
    { title: 'Last Name', description: 'Enter your last name' },
  ],
  biodata: [
    {
      title: 'Date of Birth',
      description: 'Enter your Date of Birth',
      type: 'date',
    },
    { title: 'Gender', options: ['Male', 'Female'] },
    { title: 'Marital Status', options: ['Single', 'Married', 'Divorced'] },
    { title: 'Religion', options: ['Christianity', 'Islam', 'Rather not say'] },
    {
      title: 'Medical Records',
      options: ['Record 1', 'Record 2', 'Record 3'],
    },
    {
      title: 'Profession',
      options: ['Profession 1', 'Profession  2', 'Profession 3'],
    },
    {
      title: 'Phone Number',
      description: 'Enter your phone number',
      type: 'tel',
    },
    {
      title: 'Phone Number (Optional)',
      description: 'Enter your phone number',
      type: 'tel',
    },
    {
      title: 'Email',
      description: 'Enter your email address',
      type: 'email',
    },
  ],
  address: [
    { title: 'Country', options: ['Nigeria', 'France', 'Egypt', 'Ghana'] },
    { title: 'State', options: ['Lagos', 'Ilorin', 'Abuja', 'Kaduna'] },
    {
      title: 'Local Government',
      options: [
        'Ibadan S/W',
        'Lagos Central',
        'Abuja Central',
        'Kaduna Central',
      ],
    },
    {
      title: 'Town/City',
      options: ['Ikeja', 'Epe', 'Ofa', 'Ibadan'],
    },
    { title: 'Neighbourhood', description: 'Enter your Neighbourhood' },
    { title: 'Street Address', description: 'Enter your Street Address' },
  ],
  otherDetails: [
    {
      title: 'Medical Data',
      description: 'Enter your residential address line 1 here',
    },
    {
      title: 'Tags',
      description: 'Select from the options',
    },
  ],
  nextOfKin: [{}],
  nonHospitalIndetifiers: [{}],
  paymentInformation: [{}],
  medicalData: [{}],
};
const ClientFullForm = () => {
  const [isFullRegistration, setFullRegistration] = useState(true);

  return (
    <>
      {isFullRegistration ? (
        <PageWrapper>
          <GrayWrapper>
            <HeadWrapper>
              <div>
                <h2>Create Client</h2>
                <span>
                  Create a New client by filling out the form below to get
                  started.
                </span>
              </div>
              <Button
                label='Quick Registration'
                background='#ECF3FF'
                color='#0364FF'
                showicon={true}
                icon='bi bi-pen-fill'
                onClick={() => setFullRegistration(false)}
              />
            </HeadWrapper>
            {/* Names */}
            <DetailsWrapper>
              <h2>NAMES</h2>
              <GridWrapper className='subgrid'>
                {clientFullFormData.names.map((name, index) => (
                  <Input label={name.title} key={index} />
                ))}
              </GridWrapper>
            </DetailsWrapper>

            {/*   BioData */}
            <DetailsWrapper>
              <h2>BIO-DATA</h2>
              <GridWrapper className='subgrid'>
                {clientFullFormData.biodata.map((bio, index) => {
                  if (bio.options) {
                    return (
                      <Select
                        options={bio.options}
                        label={bio.title}
                        key={index}
                      />
                    );
                  } else {
                    return (
                      <Input label={bio.title} key={index} type={bio.type} />
                    );
                  }
                })}
              </GridWrapper>
            </DetailsWrapper>

            {/* Address   */}
            <DetailsWrapper>
              <h2>ADDRESS</h2>
              <GridWrapper className='subgrid'>
                {clientFullFormData.address.map((address, index) => {
                  if (address.options) {
                    return (
                      <Select
                        options={address.options}
                        label={address.title}
                        key={index}
                      />
                    );
                  } else {
                    return (
                      <Input
                        label={address.title}
                        key={index}
                        // type={address.type}
                      />
                    );
                  }
                })}
              </GridWrapper>
            </DetailsWrapper>

            {/* Other Details  */}
            <DetailsWrapper>
              <h2>OTHER DETAILS</h2>
              <GridWrapper className='subgrid'>
                {clientFullFormData.address.map((address, index) => {
                  if (address.options) {
                    return (
                      <Select
                        options={address.options}
                        label={address.title}
                        key={index}
                      />
                    );
                  } else {
                    return (
                      <Input
                        label={address.title}
                        key={index}
                        // type={address.type}
                      />
                    );
                  }
                })}
              </GridWrapper>
            </DetailsWrapper>
          </GrayWrapper>
          <BottomWrapper>
            <Button label='Clear Form' background='#FFE9E9' color='#ED0423' />
            <Button label='Save Form' />
          </BottomWrapper>
        </PageWrapper>
      ) : (
        <ClientQuickForm />
      )}
    </>
  );
};

export default ClientFullForm;
