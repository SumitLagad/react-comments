import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails'
import Faker from 'faker';
import  ApprovalCard from './ApprovalComponent'


const App = () => {
    return (
        <div className="ui comments container">

            <ApprovalCard>
                <CommentDetails author='Sumit' timeAgo='Yesterday 11PM' comment='I am fine' avatar={Faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author='Pankaj' timeAgo='Yesterday 10PM' comment='how r u?' avatar={Faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author='Shekhu' timeAgo='Yesterday 9PM' comment='Nice dp' avatar={Faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <div>
                    <h4>Warning !</h4>
                    Do you still want to continue ?
                </div>
            </ApprovalCard>
              
              

        </div>
  
    );
};


ReactDOM.render(<App />,document.getElementById('root'));