import { TableMenu } from '../../../styles/global';
import Button from '../../buttons/Button';
import Input from '../../inputs/basic/Input';
import { PageWrapper } from '../styles';
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { ClientDataRow, columnsClient, dataClient } from './data';
import ClientQuickForm from './forms/ClientQuickForm';
import SingleClient from './details/SingleClient';

const Clients = () => {
  const [createClient, setCreateClient] = useState(false);
  const [showSingleClient, setShowSingleClient] = useState(false);
  const [singleClient, setSingleClient] = useState<ClientDataRow>({
    id: 0,
    fname: '',
    lname: '',
    mname: '',
    age: 0,
    gender: '',
    phone: '',
    email: '',
    maritalStatus: '',
    religion: '',
    medicalRecord: '',
    profession: '',
    country: '',
    state: '',
    LGA: '',
    townCity: '',
    neighborhood: '',
    streetAddress: '',
    tags: '',
    otherBioData: '',
    nextOfKin: '',
    nonHospitalIndetifiers: '',
    paymentInformation: '',
    assignToCareTeam: false,
    nextOfKinFullName: '',
    nextOfKinPhone: '',
    nextOfKinEmail: '',
    nextOfKinRelationship: '',
    nationalID: '',
    internationPassportNumber: '',
    votersCardNumber: '',
    driversLicenseNumber: '',
    bloodGroup: '',
    genotype: '',
    disabilities: '',
    allergies: '',
    coMobidities: '',
    specificDetails: '',
  });
  console.log(singleClient);

  if (!createClient) {
    if (!showSingleClient) {
      return (
        <PageWrapper>
          <h2>Client</h2>
          <TableMenu>
            <div className='inner-table'>
              <Input placeholder='Search here' />
              <div>
                <span>Filer by</span>
                <i className='bi bi-chevron-down'></i>
              </div>
            </div>

            <Button label='Add new' onClick={() => setCreateClient(true)} />
          </TableMenu>
          <div style={{ width: '100%', height: '600px', overflow: 'auto' }}>
            <DataTable
              title='Clients'
              columns={columnsClient}
              data={dataClient}
              selectableRows
              pointerOnHover
              highlightOnHover
              striped
              onRowClicked={(row, event) => {
                setSingleClient(row);
                setShowSingleClient(true);
              }}
              style={{ overflow: 'hidden' }}
            />
          </div>
        </PageWrapper>
      );
    } else {
      return (
        <SingleClient
          row={singleClient}
          onClick={() => setShowSingleClient(false)}
        />
      );
    }
  } else {
    return <ClientQuickForm />;
  }
};

export default Clients;
