import originalData from '../resources/data.json';

class DataService {
  constructor() {
    this.data = originalData;
  }
}
const dataService = new DataService();
const { data } = dataService;
export default data;
