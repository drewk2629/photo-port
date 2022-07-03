import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description:
        'View from the grocery store'
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description:
        'Photo of a grocery booth'
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description:
        'Tall building with a unique exterior'
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description:
        'Dine in at this fancy joint'
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description:
        'Chill atmosphere at this cafe'
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description:
        'Beautiful cat with green eyes'
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description:
        'Fancy parrot'
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description:
        'Caw macaw, vibrant portrait'
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description:
        'Happy boy'
    },
    {
      name: 'Pancakes',
      category: 'food',
      description:
        'Yummy pancakes'
    },
    {
      name: 'Burrito',
      category: 'food',
      description:
        'These burritos are amazing'
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description:
        'Love this scallop pasta'
    },
    {
      name: 'Burger',
      category: 'food',
      description:
        'This burger will make your mouth water'
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description:
        'Assorted fruit bowl'
    },
    {
      name: 'Green river',
      category: 'landscape',
      description:
        'Down by the river'
    },
    {
      name: 'Docks',
      category: 'landscape',
      description:
        'Beautiful sunset on the docks'
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description:
        'Stunning village by the sea'
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description:
        'Mansion lifestyle'
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description:
        'Shot of a park bench'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentPhotos = photos.filter(photo => photo.category === category);
  
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
      setCurrentPhoto({...image, index: i})
      setIsModalOpen(!isModalOpen);
  }

  return (
      <div>
          <div>
              {isModalOpen && (
              <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
          )}
          </div>
          
          <div className="flex-row">
              {currentPhotos.map((image, i) => (
                  <img
                      src={require(`../../assets/small/${category}/${i}.jpg`)}
                      alt={image.name}
                      className="img-thumbnail mx-1"
                      onClick={() => toggleModal(image, i)}
                      key={image.name}
                  />
              ))}
          </div>
      </div>
  );
};

export default PhotoList;