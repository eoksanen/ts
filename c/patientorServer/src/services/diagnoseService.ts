/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import diagnoseData from '../../data/diagnoses.json';
import { NonSensitiveDiagnoseEntry, DiagnoseEntry } from '../types';

const getEntries = (): DiagnoseEntry[] => {
    return diagnoseData;
  };

  const getNonSensitiveEntries = (): NonSensitiveDiagnoseEntry[] => {
    return diagnoseData.map(({ code, name }) => ({
      code,
      name,
    }));
};
  
  const addEntry = () => {
    return null;
  };
  
  export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries
  };