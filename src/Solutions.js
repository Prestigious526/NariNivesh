import React from 'react';
import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import CrowdlendingPlatform from './crowdlendingPlatform';
import CreditEvaluation from './CreditEvaluation';
import FinancialLiteracy from './FinancialLiteracy';
import PolicyAdvocacy from './PolicyAdvocacy';
import BlockchainIdentity from './BlockchainIdentity';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function Solutions() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
        Our Solutions
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="Crowdlending" />
          <Tab label="Credit Evaluation" />
          <Tab label="Financial Literacy" />
          <Tab label="Policy Advocacy" />
          <Tab label="Blockchain Identity" />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
        <CrowdlendingPlatform />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreditEvaluation />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FinancialLiteracy />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PolicyAdvocacy />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <BlockchainIdentity />
      </TabPanel>
    </Container>
  );
}

export default Solutions;