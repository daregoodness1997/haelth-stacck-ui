import { TableMenu } from '../../../styles/global';
import Button from '../../buttons/Button';
import Input from '../../inputs/basic/Input';
import { PageWrapper } from '../styles';
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import ClientDetails from './ClientDetails';
import { columnsAppointment, dataAppointments } from './data';
import { Link } from 'react-router-dom';
import SingleAppointment from './details/SingleAppointment';

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const Appointments = () => {
  const [newAppointment, setNewAppointments] = useState(false);
  const [showSingleAppointments, setShowSingleAppointments] = useState(false);
  const [singleAppointment, setSingleAppointments] = useState({});
  console.log(singleAppointment);

  return (
    <>
      {!showSingleAppointments ? (
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
          <div
            style={{
              width: '100%',
              height: '800px',
              overflow: 'auto',
              padding: '0 0 10rem',
            }}
          >
            <DataTable
              title='Appointment Listing'
              columns={columnsAppointment}
              data={dataAppointments}
              selectableRows
              fixedHeader
              pointerOnHover
              highlightOnHover
              striped
              onRowClicked={(row, event) => {
                setSingleAppointments(row);
                setShowSingleAppointments(true);
              }}
            />
          </div>
        </PageWrapper>
      ) : (
        <SingleAppointment
          row={singleAppointment}
          onClick={() => setShowSingleAppointments(false)}
        />
      )}
    </>
  );
};

export default Appointments;
