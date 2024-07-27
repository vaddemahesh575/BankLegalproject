import React, { useState } from 'react';
import {
  TextField, Select, MenuItem, Button, RadioGroup, FormControlLabel, Radio, Input,
  FormControl, InputLabel, Box, Drawer, AppBar, Toolbar, Typography, CssBaseline
} from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';

const FileCreationPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [entity, setEntity] = useState('');
  const [entityName, setEntityName] = useState('');
  const [branch, setBranch] = useState('');
  const [clientName, setClientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [extent, setExtent] = useState('');
  const [docType, setDocType] = useState('');
  const [lastRegDeed, setLastRegDeed] = useState('');
  const [purchaser, setPurchaser] = useState('');
  const [seller, setSeller] = useState('');
  const [regDate, setRegDate] = useState(null);
  const [regOffice, setRegOffice] = useState('');
  const [verifiedOriginal, setVerifiedOriginal] = useState('');

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Executive and Advocate Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }} 
          onClick={toggleDrawer}
        >
          Create New File
        </Button>
      </Box>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 600, p: 3 }}
          component="form"
        >
          <Typography variant="h5" gutterBottom>
            Create New File
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>Entity</InputLabel>
            <Select value={entity} onChange={(e) => setEntity(e.target.value)}>
              <MenuItem value="Bank">Bank</MenuItem>
              <MenuItem value="DSC">DSC</MenuItem>
              <MenuItem value="P">P</MenuItem>
            </Select>
          </FormControl>
          
          <TextField fullWidth margin="normal" label="Name for Entity" value={entityName} onChange={(e) => setEntityName(e.target.value)} />
          <TextField fullWidth margin="normal" label="Branch (if any)" value={branch} onChange={(e) => setBranch(e.target.value)} />
          <TextField fullWidth margin="normal" label="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
          <TextField fullWidth margin="normal" label="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
          <TextField fullWidth margin="normal" label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          
          <FormControl fullWidth margin="normal">
            <InputLabel>Property Type</InputLabel>
            <Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <MenuItem value="Land">Land</MenuItem>
              <MenuItem value="Building">Building</MenuItem>
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Shed">Shed</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          
          <TextField fullWidth margin="normal" label="Property Address" value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} />
          <TextField fullWidth margin="normal" label="Extent in sq yds" value={extent} onChange={(e) => setExtent(e.target.value)} />
          
          <FormControl fullWidth margin="normal">
            <InputLabel>Registered Document Type</InputLabel>
            <Select value={docType} onChange={(e) => setDocType(e.target.value)}>
              <MenuItem value="Sale">Sale</MenuItem>
              <MenuItem value="Gift">Gift</MenuItem>
              <MenuItem value="Partition">Partition</MenuItem>
              <MenuItem value="AGPA">AGPA</MenuItem>
              <MenuItem value="Agreement">Agreement</MenuItem>
              <MenuItem value="Passbook">Passbook</MenuItem>
            </Select>
          </FormControl>
          
          <TextField fullWidth margin="normal" label="Last Registered Deed #" value={lastRegDeed} onChange={(e) => setLastRegDeed(e.target.value)} />
          <TextField fullWidth margin="normal" label="Name of the Purchaser" value={purchaser} onChange={(e) => setPurchaser(e.target.value)} />
          <TextField fullWidth margin="normal" label="Name of the Seller" value={seller} onChange={(e) => setSeller(e.target.value)} />
          
          {/* <DatePicker
            label="Registration Date"
            value={regDate}
            onChange={(date) => setRegDate(date)}
            renderInput={(params) => <TextField {...params} />}
          /> */}
          
          <TextField fullWidth margin="normal" label="Registrar / Sub-Registrar Office" value={regOffice} onChange={(e) => setRegOffice(e.target.value)} />
          
          <RadioGroup value={verifiedOriginal} onChange={(e) => setVerifiedOriginal(e.target.value)} sx={{ flexDirection: 'row' }}>
            <FormControlLabel value="Yes" control={<Radio />} label="Verified Original Yes" />
            <FormControlLabel value="No" control={<Radio />} label="Verified Original No" />
          </RadioGroup>
          
          <Input fullWidth margin="normal" type="file" onChange={handleFileChange} />
          
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
        </Box>
      </Drawer>
    </>
  );
};

export default FileCreationPage;