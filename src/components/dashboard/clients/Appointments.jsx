import { TableMenu } from '../../../styles/global';
import Button from '../../buttons/Button';
import Input from '../../inputs/basic/Input';
import { PageWrapper } from '../styles';
import DataTable from 'react-data-table-component';
import { useState } from 'react';

const columns = [
  {
    name: 'S/N',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Date/Time',
    selector: row => row.dtime,
    sortable: true,
  },
  {
    name: 'First Name',
    selector: row => row.fname,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: row => row.lname,
    sortable: true,
  },
  {
    name: 'Classification',
    selector: row => row.classification,
    sortable: true,
  },
  {
    name: 'Location',
    selector: row => row.location,
    sortable: true,
  },
  {
    name: 'Type',
    selector: row => row.type,
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
  },
  {
    name: 'Reason',
    selector: row => row.reason,
    sortable: true,
  },
  {
    name: 'Practitioner',
    selector: row => row.practitioner,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    dtime: '27-10-21 09:43:00',
    fname: 'John',
    lname: 'Doe',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 2,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 3,
    dtime: '27-10-21 09:43:00',
    fname: 'Jon',
    lname: 'Smith',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 4,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 5,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 6,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 7,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 8,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 9,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 10,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 11,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 12,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 13,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 14,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 15,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
  {
    id: 16,
    dtime: '27-10-21 09:43:00',
    fname: 'Wale',
    lname: 'Adeniji',
    classification: 'On-site',
    location: 'Oupatient Clinic',
    type: 'New',
    status: 'Scheduled',
    reason: 'Headache',
    practitioner: 'Simpa Diana',
  },
];

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const Appointments = () => {
  const [newAppointment, setNewAppointments] = useState(false);
  return (
    <PageWrapper>
      <h2>Appointments</h2>
      <TableMenu>
        <div className='inner-table'>
          <Input placeholder='Search here' />
          <div>
            <span>Filer by</span>
            <i className='bi bi-chevron-down'></i>
          </div>
        </div>

        <Button label='Add new' onClick={() => setNewAppointments(true)} />
      </TableMenu>
      <div style={{ width: '100%', height: '600px', background: 'red' }}>
        <DataTable
          title='Appointment Listing'
          columns={columns}
          data={data}
          selectableRows
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          // pagination
          fixedHeader
          pointerOnHover
          highlightOnHover
          striped
          onRowClicked={(row, event) => alert(row.id)}
        />
      </div>
    </PageWrapper>
  );
};

export default Appointments;
