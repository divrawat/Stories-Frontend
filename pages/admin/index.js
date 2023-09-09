import Admin from "@/components/Admin";
import AdmindashLayout from "@/components/AdmindashLayout";

const AdminIndex = () => {

  return (
    <Admin>
        <AdmindashLayout>
          <h2 style={{color:"var(--text-color)", paddingTop:"7px"}}>Welcome To Admin's DashBoard</h2>
          <div style={{color:"var(--text-color)", paddingTop:"10px"}}>You can now create stories</div>
          </AdmindashLayout>  
    </Admin>

  );
};

 export default AdminIndex;
