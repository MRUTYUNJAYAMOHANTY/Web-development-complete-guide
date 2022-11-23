                 ** Check images in assests folder for flow diagram **

* RESTful API s are stateless.
* Client will send data from browser to server for  daat validation. 
* If all data is valid , server will send a token(JWT,JSON web token) to client browser.
* JWT is an encoded string which contains meta data . JWT String is encoded not encrypted.
* JWT is encoded , because this string could be unpacked & read by the client.
* JWT is generated on server side with a certain algorithm & certain secret which only server  
  knows & only server can validate incoming tokens for their validity 
      
             ***** Mechanism of JWT / Private key *****
* Client will store the token in some storage (local storage of browser) & attaches the tokens 
  to any request(headers , query params) , that therafter is send request to server which needs to be authenticated
* If not authenticated server can block the access

           ********** AUTHENTICATION vs AUTHORIZATION *********
  Authentication is done before the authorization process, whereas the authorization process is done after the authentication process.

  AUTHENTICATION                                     AUTHORIZATION
 1. Authentication verifies the identity           1. Authorization determines their  access rights
    of a user or service     
 2. the identity of users are checked for          2.the person’s or user’s authorities are checked 
    providing  the access to the system.            for accessing the resources.
 3. users or persons are verified.                 3.  users or persons are validated.
 4. done before the authorization process.         4. done after the authentication process.
 5. needs usually the user’s login details.        5.needs the user’s privilege or security levels.
 6. determines whether the person is user or not.  6. determines What permission does the user  
                                                      have?.
 7. transmit information through an ID Token.      7. transmit information through an Access Token.
 8. OpenID Connect (OIDC) protocol is an           8. OAuth 2.0 protocol governs the overall system
    authentication protocol that is generally         of user authorization process.
    in charge of user authentication process.
      
 9. Authentication Techniques-                     9. Authorization Techniques-
    . Password-Based Authentication                   . Role-Based Access Controls (RBAC)
    . Passwordless Authentication                     . SON web token (JWT) Authorization
    . 2FA/MFA(Two-Factor Authentication/              . SAML Authorization
      Multi-Factor Authentication)                    . OpenID Authorization
    . Single sign-on (SSO)                            . OAuth 2.0 Authorization
    . Social authentication
 10. authentication credentials can be changed     10. authorization permissions cannot be changed
     in part as and when required by the user.         by user as these are granted by the owner of 
                                                       the system and only owner has the access to change it
 11. user authentication is visible at user end.    11. user authorization is not visible at the 
                                                        user end.
 12. user authentication is identified with         12. user authorization is carried out
     username, password, face recognition,              through the access rights to resources
     retina scan, fingerprints, etc.                    by using roles that have been pre-defined.
 13. Example: Employees in a company are required   13. After an employee successfully
     to authenticate through the network before         authenticates, the system determines
     accessing their company email.                     what information the employees are allowed 
                                                        to access.
         
         *********** ENCRYPTED vs ENCODED *********
ENCRYPTED VS ENCODED :
* > Encryption is process used to convert simple readable data known as plain text to unreadable 
    data known as ciphertext which can only be converted to plain text if the user knows the encryption key.
  > The reverse of encryption is decryption and it is used to get back the plain text from the 
    ciphertext. For decryption, we must know the encryption key and the encryption algorithm. 
  > The encrypted data is just treated like other data. We can also use more than one encryption
    algorithm on the same data. The real-life examples are sending someone a secret message that only they should be able to read, or securely sending a password over the Internet. The goal is data confidentiality.
             Example of Encryption Algorithm : AES, RSA, and Blowfish.  
* > Encoding  is the process to transform data in such a format that it can be easily used by 
    different types of systems. The algorithm used to encode the data is publicly available and it can be easily decoded in the readable form if the person knows the algorithm. It does not require any key to decode the information. The main purpose is data usability instead of confidentiality. The main aim of encoding is to transform the data so that it can be properly used by a different type of system. It is not used to protect the data as it is easy to reverse in comparison to encryption. 
  > This process is used to ensure the integrity and usability of data. The real-life examples are
   like binary data being sent over email or viewing special characters on a web page. The main goal is data usability.
              Examples of Encoding Algorithm: ASCII, UNICODE, URL Encoding, Base64

   







