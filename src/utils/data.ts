export const modules = {
  first: [
    'Accounting',
    'Admin',
    'Blood Bank',
    'Client',
    'Clinic',
    'Communication',
    'Continous Mediscal Education',
    'Documentation',
    'Epidemiology',
    'Finance',
    'Immunization',
  ],
  second: [
    'Inventory',
    'Laboratory',
    'Managed Care',
    'Patient Portal',
    'Pharmacy',
    'Radiology',
    'Report',
    'Research and Data Exhange',
    'Telemedicine',
    'Theatre',
    'User Profile',
  ],
};

export const organizationTypeOptions: string[] = [
  'Hospital',
  'Research Institute',
];
export const organizationOptions: string[] = [
  'Private',
  'Public',
  'Government',
];

export const countriesOptions: string[] = [
  'Nigeria',
  'France',
  'England',
  'Cameron',
];

export const createOrganizationData = [
  {
    type: 'text',
    label: 'Name of Organization',
    name: 'nameOfOrganzation',
    children: false,
    option: false,
    childrenContent: [],
  },
  {
    type: 'text',
    label: 'CAC Number',
    name: 'cacNumber',
    children: false,
    option: false,
    childrenContent: [],
  },
  {
    children: true,
    childrenContent: [
      {
        label: 'Organization Country',
        name: 'organizationCountry',
        children: false,
        option: true,
        options: countriesOptions,
      },
      {
        type: 'text',
        label: 'State',
        name: 'state',
        children: false,
        option: false,
      },
    ],
  },
  {
    children: true,
    childrenContent: [
      {
        type: 'text',
        label: 'LGA',
        name: 'lga',
        children: false,
        option: false,
      },
      {
        type: 'text',
        label: 'City/Town',
        name: 'citytown',
        children: false,
        option: false,
      },
    ],
  },
  {
    type: 'text',
    label: 'Registered Address',
    name: 'registeredAddress',
    children: false,
    option: false,
    childrenContent: [],
  },
  {
    type: 'tel',
    label: 'Contact Phone Number',
    name: 'contactPhoneNumber',
    children: false,
    option: false,
    childrenContent: [],
  },
  {
    type: 'email',
    label: 'Organization Email',
    name: 'organizationEmail',
    children: false,
    option: false,
    childrenContent: [],
  },
  {
    type: 'text',
    label: 'Organization CEO',
    name: 'organizationCEO',
    children: false,
    option: false,
    childrenContent: [],
  },
  {
    children: true,
    childrenContent: [
      {
        label: 'Organization Type',
        name: 'organizationType',
        children: false,
        option: true,
        options: organizationTypeOptions,
      },
      {
        label: 'Organization Category',
        name: 'organizationCategory',
        children: false,
        option: true,
        options: organizationOptions,
      },
    ],
  },
];
