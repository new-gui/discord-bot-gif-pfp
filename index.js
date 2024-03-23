const new_profile_pic_url = 'IMAGE_URL_HERE'; // Replace with your animated GIF URL

client.on('messageCreate', (message) => {
    if (message.content === '!setpfp') {
        client.user.setAvatar(new_profile_pic_url)
            .then(() => {
                console.log('Profile picture updated successfully!');
            })
            .catch((error) => {
                console.error('Error updating profile picture:', error);
            });
    }
});
