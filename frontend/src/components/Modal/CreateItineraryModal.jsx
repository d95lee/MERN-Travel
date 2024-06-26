import './CreateItineraryModal.css'
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { createItinerary, fetchItineraries } from '../../store/itinerary';
import { useNavigate } from 'react-router-dom';

const CreateItineraryModal = ({ modalState, setModalState })  => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const fileRef = useRef(null);
    const [country, setCountry] = useState('')
    const [errors, setErrors]= useState([])

    useEffect(() => {
        dispatch(fetchItineraries())
    }, [dispatch])


    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(createItinerary({ title, description, country }, images ))
            .then((data) => navigate(`itinerary/form/${data._id}`))
            .then(() => setModalState(null))
            .then(() => setImages([]))
            .then(() => setImageUrls([]))
            .then(() => fileRef.current.value = null)
            .catch(async res =>{
                let data = await res.json();
                setErrors(data);
              });
    };

    const updateFiles = async e => {
        const files = e.target.files;
        setImages(files);
        if (files.length !== 0) {
          let filesLoaded = 0;
          const urls = [];
          Array.from(files).forEach((file, index) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              urls[index] = fileReader.result;
              if (++filesLoaded === files.length)
                setImageUrls(urls);
            }
          });
        }
        else setImageUrls([]);
      }
      const hasErrors = Object.values(errors).length !== 0;


    if (modalState === 'create') {
        return (
            <>
                <div className='create-modal-background' onClick={() => setModalState(null)}>
                    <div className='create-modal-content' onClick={e => e.stopPropagation()}>
                        <div className='create-form-header'>Start Planning Your Trip</div>
                        <div className='create-form-title'>Create Your Itinerary</div >
                        <form onSubmit={handleSubmit}>
                            <label>
                                <span className='modal-session-text'>Title:</span>
                                <input
                                    className='create-itinerary-input'
                                    placeholder='Title for your itinerary'
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </label>
                            <div className="event-modal-input-error">{hasErrors && errors.errors.title ? errors.errors.title : ''}</div>

                            <label>
                                <span className='modal-session-text'>Description:</span>
                                <input
                                    className='create-itinerary-input'
                                    placeholder='Description'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </label>
                            <label >
                                <span className='modal-session-text'>Country:</span>
                                <input className='create-itinerary-input'
                                        placeholder='Country'
                                        value={country}
                                        onChange={e => setCountry(e.target.value)} />
                            </label>
                            <div className="event-modal-input-error">{hasErrors && errors.errors.country ? errors.errors.country : ''}</div>
                            <label>
                                <span className='modal-session-text'>Images to Upload</span>
                                <input
                                    type='file'
                                    ref={fileRef}
                                    accept='.jpg, .jpeg, .png'
                                    multiple //Comment back in to allow users to upload multiple photos
                                    onChange={updateFiles}
                                />
                            </label>
                            {/* <div className="image-preview">
                                <h3>Image Preview</h3>
                                    {(text || imageUrls.length !== 0) ?                  // <-- MODIFY THIS LINE
                                        <TweetBox tweet={{text, author, imageUrls}} /> : // <-- MODIFY THIS LINE
                                        undefined}
                                </div> */}
                            <input className='create-submit' type="submit" value="Create" />
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateItineraryModal;
