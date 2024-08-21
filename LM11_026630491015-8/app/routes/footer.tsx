import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 flex items-center">
        <div className="w-1/4">
          <img 
            src="/Photos/c48a73d54d36ca091d70f19d908dd755.jpg" 
            alt="Profile" 
            className="w-full h-auto rounded-full" 
          />
        </div>
        <div className="w-3/4 flex flex-col space-y-6 ml-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">First - last name</h2>
            <p> Thanasin Chuesuai </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">NikeName</h2>
            <p> Moowran </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Student ID</h2>
            <p> 026630491015-8 </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Faculty and Branch</h2>
            <p> Faculty of Business Administration and Information Technology Information Technology branch </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Telephone number</h2>
            <p> 091-724-3230 </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">E-mail</h2>
            <p>thanasi.chu@rmutto.ac.th</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>@Thanasin.com</p>
      </div>
    </footer>
  );
};

export default Footer;
