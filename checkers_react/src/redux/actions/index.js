export function addImage(e){
   return {
      type: "ADD_IMAGE",
      images: e.target.value
   }
}
