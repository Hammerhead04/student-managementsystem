function Footer() {
    return (
      <footer className="bg-white border-t py-4">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          Student Management System &copy; {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
  
  export default Footer;