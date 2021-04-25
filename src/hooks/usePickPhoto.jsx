import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import * as ImagePicking from 'expo-image-picker';


const usePickPhoto = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicking.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicking.launchImageLibraryAsync({
            mediaTypes: ImagePicking.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return [image, pickImage];
};

export default usePickPhoto;
