import { useState } from "react";
import './BioModal.css'
import { useDispatch } from "react-redux";
import { updateBio } from "../../store/user";
import { useParams } from "react-router-dom";

const BioModal = ({bioState, setBioState, userBio}) => {
    const [bio, setBio] = useState(userBio ? userBio : '');
    const dispatch = useDispatch()
    const { userId } = useParams();



    const handleEdit = e => {
        e.preventDefault();
        dispatch(updateBio({bio}, userId))
        .then(() => setBioState(null))
    }


    return (
        <div className="bio-modal-background"  onClick={() => setBioState(null)}>
            <div className="bio-modal-content" onClick={e => e.stopPropagation()}>
                <h2 className="bio-heading">Bio</h2>
                <form className="bio-form" onSubmit={handleEdit}>
                    <input
                        className="bio-paragraph"
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                    />

                    <input className="submit-edit" type="submit" value='Edit' />
                </form>
            </div>
        </div>
    )


}

export default BioModal
