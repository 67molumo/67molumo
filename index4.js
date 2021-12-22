
function createContact() {
  const addressBook = document.querySelector('#addressBook');

  const Mathemetics = document.querySelector('#mathsGrade').value;
  const English = document.querySelector('#EnglishGrade').value;
  const Business_studies = document.querySelector('#BusinessGrade').value;
  
  

  if(Mathemetics>=90)
  {
    const contact = document.createElement('div');
    contact.innerHTML = `
      
    <img src='IT.png' alt='avater' />
      <h1>Information Technology</h1>
     <p>study IT system development, become a full stack software or web developer/programmer</p>;`
    addressBook.appendChild(contact);
  }
  else if((English>=70)&&(Business_studies>=70))
  {
    const contact = document.createElement('div');
    contact.innerHTML = `
    <img src='BM.jpg' alt='avater' />
    <h1>Business Management</h1>
      <p>Business management is indended for participants who are serously considering enterpreneurship as a career option</p> `;
  
    addressBook.appendChild(contact);
  }
  else if((Mathemetics<90)&&(English>=70)&&(Business_studies<70))
  {
    const contact = document.createElement('div');
    contact.innerHTML = `
    <img src='CM.png' alt='avater' />
    <h1>Communication studies</h1>
      <p>The study of how we communicate differently to various audiences/users and communities</p>
      `;
  
    addressBook.appendChild(contact);
  }
  else
  {
    const contact = document.createElement('div');
    contact.innerHTML = `
    <h1>hey your results are too low please go and supplement and come back next year</h1>`;
  }
  
}