export const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {currentYear} Omer Awan. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  