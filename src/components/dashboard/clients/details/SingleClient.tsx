import React, { useState } from 'react';
import Button from '../../../buttons/Button';
import Input from '../../../inputs/basic/Input';
import {
  BottomWrapper,
  DetailsWrapper,
  GrayWrapper,
  GridWrapper,
  HeadWrapper,
  PageWrapper,
} from '../../styles';
import { ClientDataRow } from '../data';

interface SingleProps {
  row: ClientDataRow;
  onClick?: () => void;
}

const SingleClient: React.FC<SingleProps> = ({ row, onClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <PageWrapper>
        <GrayWrapper>
          <HeadWrapper>
            <div>
              <h2>Client Details</h2>
              <span>Below are your client’s details</span>
            </div>
            <Button
              label={isEditing ? 'Cancel Editing' : 'Edit Details'}
              background={isEditing ? '#f2f2f2' : '#ECF3FF'}
              color={isEditing ? '#333' : '#0364FF'}
              showicon={true}
              icon='bi bi-pen-fill'
              onClick={() => setIsEditing(!isEditing)}
              // disabled={isEditing ? true : false}
            />
          </HeadWrapper>
          <DetailsWrapper>
            <span onClick={onClick}>Clients</span> / {row.id}
            {isEditing ? (
              <GridWrapper>
                <Input label='ID' value={row.id} />
                <Input label='First name' value={row.fname} />
                <Input label='Middle name' value={row.mname} />
                <Input label='Last name' value={row.lname} />
                <Input label='Age' value={row.age} />
                <Input label='Gender' value={row.gender} />
                <Input label='Phone Number' type='tel' value={row.phone} />
                <Input label='Email address' type='email' value={row.email} />
                <Input
                  label='Marital Status'
                  type='text'
                  value={row.maritalStatus}
                />
                <Input label='Religion' type='text' value={row.religion} />
                <Input
                  label='Medical Records'
                  type='text'
                  value={row.medicalRecord}
                />
                <Input label='Profession' type='text' value={row.profession} />
              </GridWrapper>
            ) : (
              <GridWrapper>
                <div>
                  <label>ID</label>
                  <p>{row.id}</p>
                </div>

                <div>
                  <label>First Name</label>
                  <p>{row.fname}</p>
                </div>
                <div>
                  <label>Middle Name</label>
                  <p>{row.mname}</p>
                </div>
                <div>
                  <label>Last Name</label>
                  <p>{row.lname}</p>
                </div>
                <div>
                  <label>Age</label>
                  <p>{row.age}</p>
                </div>
                <div>
                  <label>Gender</label>
                  <p>{row.gender}</p>
                </div>
                <div>
                  <label>Phone Number</label>
                  <p>{row.phone}</p>
                </div>
                <div>
                  <label>Email address</label>
                  <p>{row.email}</p>
                </div>
                <div>
                  <label>Marital Status</label>
                  <p>{row.maritalStatus}</p>
                </div>
                <div>
                  <label>Religion</label>
                  <p>{row.religion}</p>
                </div>
                <div>
                  <label>Medical Records</label>
                  <p>{row.medicalRecord}</p>
                </div>
                <div>
                  <label>Profession</label>
                  <p>{row.profession}</p>
                </div>
                <div>
                  <label>Country</label>
                  <p>{row.country}</p>
                </div>
                <div>
                  <label>State</label>
                  <p>{row.state}</p>
                </div>
                <div>
                  <label>Local Government Area</label>
                  <p>{row.LGA}</p>
                </div>
                <div>
                  <label>Town/City</label>
                  <p>{row.townCity}</p>
                </div>
                <div>
                  <label>Neighbourhood</label>
                  <p>{row.neighborhood}</p>
                </div>
                <div>
                  <label>Street Address</label>
                  <p>{row.streetAddress}</p>
                </div>
                <div>
                  <label>Tags</label>
                  <p>{row.tags}</p>
                </div>
                <div>
                  <label>Other Bio-data</label>
                  <p>{row.otherBioData}</p>
                </div>
                <div>
                  <label>Next of Kin</label>
                  <p>{row.nextOfKin}</p>
                </div>
                <div>
                  <label>Non Hospital Idenfiers</label>
                  <p>{row.nonHospitalIndetifiers}</p>
                </div>
                <div>
                  <label>Paymnet Information</label>
                  <p>{row.profession}</p>
                </div>
                <div>
                  <label>Assing To Care Team</label>
                  <p>{row.assignToCareTeam}</p>
                </div>
                <div>
                  <label>Next of Kin Full Name</label>
                  <p>{row.nextOfKinFullName}</p>
                </div>
                <div>
                  <label>Next of Kin Phone Number</label>
                  <p>{row.nextOfKinPhone}</p>
                </div>
                <div>
                  <label>Next of Kin Email</label>
                  <p>{row.nextOfKinEmail}</p>
                </div>
                <div>
                  <label>Next of Kin Relationship</label>
                  <p>{row.nextOfKinRelationship}</p>
                </div>
                <div>
                  <label>National ID</label>
                  <p>{row.nationalID}</p>
                </div>
                <div>
                  <label>International Passport Number</label>
                  <p>{row.internationPassportNumber}</p>
                </div>
                <div>
                  <label>Voter's Card Number</label>
                  <p>{row.votersCardNumber}</p>
                </div>
                <div>
                  <label>Driver's License Number</label>
                  <p>{row.driversLicenseNumber}</p>
                </div>
                <div>
                  <label>Blood Group</label>
                  <p>{row.bloodGroup}</p>
                </div>
                <div>
                  <label>Genotype</label>
                  <p>{row.genotype}</p>
                </div>
                <div>
                  <label>Disabilities</label>
                  <p>{row.disabilities}</p>
                </div>
                <div>
                  <label>Allergies</label>
                  <p>{row.allergies}</p>
                </div>
                <div>
                  <label>Co Mobidities</label>
                  <p>{row.coMobidities}</p>
                </div>
                <div>
                  <label>Specific Details</label>
                  <p>{row.coMobidities}</p>
                </div>
              </GridWrapper>
            )}
          </DetailsWrapper>

          <BottomWrapper>
            <Button
              label='Delete Client'
              background='#FFE9E9'
              color='#ED0423'
            />
            <Button label='Attend to Client' />
          </BottomWrapper>
        </GrayWrapper>
      </PageWrapper>
    </>
  );
};

export default SingleClient;
