
A digital signature is a mathematical scheme for verifying the authenticity of digital messages or documents. A valid digital signature, where the prerequisites are satisfied, gives a recipient very high confidence that the message was created by a known sender (authenticity), and that the message was not altered in transit (integrity). -wikipedia


The following questionnaire will ask you a series of questions in order to:
* Determine your specific use case
* Compare your needs with available digital signature implementations
* Rank the most appropriate scheme for your needs


***
**Advanced Questions:**

***
THRESHOLD SIGNATURE 
https://en.wikipedia.org/wiki/Threshold_cryptosystem

Do you need a scheme in which m of n parties can generate a valid signature?
YES(Shamir's Secret Sharing) NO(else)

***
RING VS GROUP SIGNATURES
https://www.mdpi.com/2410-387X/6/1/3/pdf

Would you like to anonymously generate a signature by any member of a set of users that each have keys?
YES(ring signature) NO(else)


***
DESIGNATED VERIFIER SIGNATURE
https://en.wikipedia.org/wiki/Designated_verifier_signature

Would you like a designated verifier (or a set of designated verifiers) to be the only parties which can verify the signature?
YES(designated verifier signature) NO(else)

***
CONTINUE WITH STANDARD QUESTIONNAIRE HERE, RSA, ECDSA, ETC.




