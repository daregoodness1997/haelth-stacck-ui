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
