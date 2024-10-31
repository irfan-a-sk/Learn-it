import React from 'react';
import './comm.css';


const Community =() => {
            return(
               
            



    <div class="form">
            <form>
            
            
                <div class="form-title" >
                    <h1>Register</h1>
                    </div>
                
                <div class="input-group">
                    <i class="fa-solid fa-user"></i>
                    <label for="">First Name</label>
                <input type="text" name='fname' placeholder="First Name"></input>
                </div>
                    
                    <div class="input-group">
                
                        <i class="fa-solid fa-user"></i>
                        <label for="">Last Name </label>
                        <input type="text" name='lname' placeholder="Last Name"></input>
                    </div>
                    
                    <div class="input-group">
                
                        <i class="fa fa-envelope"></i>
                        <label for="">Email</label>
                        <input type="email" name='email' placeholder="Email"></input>
                    </div>
                    <div class="input-group">
                    <i class="fa fa-phone"></i>
                <label for="">Contact No</label>
                <input type="phone" name='phone' placeholder="Contact no"></input>
            </div>
                
                    
                    
                    <div class="input-group">
                
                        <i class="fa fa-lock"></i>
                        <label for="">Password</label>
                        <input type="password" placeholder="Password"></input>
                    </div>
                    <div class="input-group">
                    <i class="fa fa-graduation-cap"></i>
                    <label>Education Qualification</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select name="Education">
                        <option name="">None</option>
                        <option name="">10th</option>
                        <option name="">12th</option>
                        <option name="">Graduation</option>
                        <option name="">Post Graduation</option>
                      
                    </select>
                    </div>
                
                    <div class="input-group">
                    <i class="fa fa-certificate"></i>
                    <label>Course</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select name="Course">
                        <option name="">...Select...</option>
                        <option name="">Web Development</option>
                        <option name="">Full Stack</option>
                        <option name="">Java</option>
                        <option name="">Python</option>
                        <option name="">C/C++</option>
                    </select>
                    </div>
                    <div class="form-title">
                        <button class="btn">Sumbit</button>
                    </div>
             </form>

                   
                    </div>
     

 
 
 
 




            );
};

export default Community;