export default function validateLocation(formData) {
  const errors = [];
  if (!formData.userId) {
    errors.push({ id: "1", error: "user Id cannot be empty" });
  }

  if (!formData.placeName) {
    errors.push({ id: "2", error: "Specify a location to add" });
  }

  if (!formData.cuisines) {
    errors.push({ id: "3", error: "Add at least one cuisine" });
  }

  if (!formData.locationTypes) {
    errors.push({ id: "4", error: "Add at least one location type" });
  }

  if (errors.length > 0) {
    return errors;
  }
  return false;
}
