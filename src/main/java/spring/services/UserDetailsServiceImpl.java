package spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import spring.model.User;
import spring.repository.UserRepository;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

   // @Autowired
    UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username).orElseThrow(() ->
                new UsernameNotFoundException("User not found"));

        return UserDetailsImpl.build(user);
    }
}
