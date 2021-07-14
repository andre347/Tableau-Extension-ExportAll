import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField, DropdownSelect, Checkbox } from '@tableau/tableau-ui';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    marginTop: 10
  }
}));

function ConfigureTab(props) {
  const classes = useStyles();

  const labelProps = {
    label: 'Button Label',
    onChange: e => {
      console.log('[ConfigureTab.js] Updating Button Label',e.target.value)
      props.updateLabel(e.target.value)
    },
    onClear: () => {
      props.updateLabel('Export All');
    },
    placeholder: 'Button Label',
    style: { width: 400 },
    value: props.label || '',
  };

  const filenameProps = {
    label: 'Export Filename',
    onChange: e => props.updateFilename(JSON.stringify(e.target.value)),
    onClear: () => {
      props.updateFilename('ExportAll');
    },
    placeholder: 'Export Filename',
    style: { width: 400 },
    value: props.filename || '',
  };

  const styleDropDown = {
    marginLeft: 10
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <TextField {...labelProps} />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField {...filenameProps} />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <React.Fragment>
            <Checkbox checked={props.showButton}  style={{display: 'flex', marginBottom: 6}} onChange={(e) => props.updateShowButton(e.target.checked)}>Button {props.showButton ? 'enabled' : 'disabled'}</Checkbox>
            Set Button Style to:
            <DropdownSelect disabled={!props.showButton} kind='line' value={props.style} onChange={e => props.updateButtonStyle(JSON.stringify(e.target.value))} style={styleDropDown}>
              <option>outline</option>
              <option>primary</option>
              <option>destructive</option>
            </DropdownSelect>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  )

}

export default ConfigureTab;
