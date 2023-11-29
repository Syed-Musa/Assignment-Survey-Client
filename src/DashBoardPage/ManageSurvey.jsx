import { useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageSurvey = () => {
  const [survey, setSurvey] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/survey')
    .then(res => res.json())
    .then(data => setSurvey(data))
  }, [])

  return (
    <div>
      <h2 className="text-5xl font-bold uppercase italic text-orange-600 text-center mt-10">Manage Survey</h2>

      <div>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Voted</th>
                    <th>Description</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    survey?.map((item, index) => <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item?.title}</td>
                        <td>{item?.voted}</td>
                        <td>{item?.description}</td>
                        <td>
                            <Link to={`/Dashboard/updateVoted/${item._id}`}><button className="btn bg-orange-600 text-white text-xl"><FaUsers></FaUsers></button></Link>
                        </td>
                      </tr>)
                  }
                  
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default ManageSurvey;
