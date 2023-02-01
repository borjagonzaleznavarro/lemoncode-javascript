import {
  getEquipmentsList
} from './property-detail.api';

export const mapPropertyListFromApiToVm = property => {
  return property.map(property => mapPropertyFromApiToVm(property));
}

const mapPropertyFromApiToVm = property => {
  return {
    id: property.id,
    title: property.title,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    notes: property.notes,
    price: `${property.price.toLocaleString()} €`,
    locationUrl: property.locationUrl,
    mainFeatures: Array.isArray(property.mainFeatures) ? property.mainFeatures : '',
    equipments: Array.isArray(property.equipmentNames) ? property.equipmentNames : '',
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    images: Array.isArray(property.images) ? property.images : '',
  }
}

const getRoomWord = rooms => {
  return rooms > 1 ? 'habitaciones' : 'habitación';
}

const getBathroomWord = bathrooms => {
  return bathrooms > 1 ? 'baños' : 'baño';
}
